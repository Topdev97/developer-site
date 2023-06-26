import {
  FormEventHandler,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";
import { Project } from "../../models/project.model";
import "./style.css";
import { projectService } from "../../services/project.service";
import { labelProjectService } from "../../services/label-project.service";
import { useInputValue } from "../../hooks/useInputValue";
import { useCheckbox } from "../../hooks/useCheckbox";
import { AuthContext } from "../../context/AuthContext";
import { imageService } from "../../services/image.service";
import { useMultiFile } from "../../hooks/useMultiFile";
import { useGetLabels } from "../ListOfLabels";
import { initialState, reducer } from "./reducer";
import { Link, useNavigate } from "react-router-dom";

type ProjectFormProps = {
  project: Project | null;
};

type LabelInput = {
  inputId: string;
  order: number | null;
  labelId: number | null;
};

export const useLabelsInputs = (project?: Project | null) => {
  const [labelsInputs, setLabelsInputs] = useState<LabelInput[]>(() => {
    if (project) {
      return project.labels.map((label) => {
        return {
          inputId: `input-label-${label.id}`,
          order: label.labelProject.order,
          labelId: label.id,
        };
      });
    } else {
      return [];
    }
  });

  const handleAddLabel = () => {
    setLabelsInputs([
      {
        inputId: `input-label-${labelsInputs.length}`,
        order: null,
        labelId: null,
      },
      ...labelsInputs,
    ]);
  };

  const handleRemoveLabel = (id: string) => {
    setLabelsInputs(
      labelsInputs.filter((labelInput) => labelInput.inputId !== id)
    );
  };

  const handleInputChange: FormEventHandler<HTMLElement> = (event) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const [property, input, label, id] = target.id.split("-");

    setLabelsInputs((prev) => {
      return prev.map((labelInput) => {
        if (labelInput.inputId == `input-label-${id}`) {
          return {
            ...labelInput,
            [property]: value,
          };
        } else {
          return labelInput;
        }
      });
    });
  };
  return {
    handleAddLabel,
    handleInputChange,
    handleRemoveLabel,
    labelsInputs,
  };
};

export const ProjectForm = ({ project }: ProjectFormProps) => {
  const { token } = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {labels,loading,error} = useGetLabels();
  const navigate = useNavigate()
  //input handler

  const title = useInputValue(project?.title ?? "");
  const description = useInputValue(project?.description ?? "");
  const link = useInputValue(project?.link ?? "");
  const repository = useInputValue(project?.repository ?? "");
  const slug = useInputValue(project?.slug ?? "");
  const shortDescription = useInputValue(project?.shortDescription ?? "");
  const publishedInput = useCheckbox(project?.published ?? true);
  const { handleAddLabel, handleInputChange, handleRemoveLabel, labelsInputs } =
    useLabelsInputs(project);
  // end input handler

  const { loadingFiles, errorFiles, files, handleFiles } = useMultiFile(
    "image",
    project?.images
  );

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      if (!project) {
        dispatch({ type: "CREATE_PROJECT", payload: null });
        const { id } = await projectService.addProject(token as string, {
          title: title.value,
          shortDescription: shortDescription.value,
          link: link.value,
          repository: repository.value,
          description: description.value,
          published: publishedInput.checked,
          slug: slug.value,
        });
        const filesPromises: any = files?.map((file: any) => {
          return imageService.addImage(token as string, {
            url: file.url,
            projectId: id,
          });
        });

        const LabelProjectPromises = labelsInputs.map((labelInput) => {
          return labelProjectService.addLabel(token as string, {
            projectId: id,
            labelId: labelInput.labelId as number,
            order: labelInput.order,
          });
        });
        await Promise.all(filesPromises);
        await Promise.all(LabelProjectPromises);
        dispatch({ type: "CREATE_PROJECT_FINISHED", payload: null });
      } else {
        dispatch({ type: "EDIT_PROJECT", payload: null });
        await projectService.updateProject(token as string, project.id, {
          title: title.value,
          shortDescription: shortDescription.value,
          link: link.value,
          repository: repository.value,
          description: description.value,
          published: publishedInput.checked,
          slug: slug.value,
        });
        await projectService.deleteLabels(token as string, project.id);
        await projectService.deleteImages(token as string, project.id);
        const filesPromises: any = files?.map((image: any) => {
          return imageService.addImage(token as string, {
            url: image.url,
            projectId: project.id,
          });
        });

        const LabelProjectPromises = labelsInputs.map((labelInput) => {
          return labelProjectService.addLabel(token as string, {
            projectId: project.id,
            labelId: labelInput.labelId as number,
            order: labelInput.order,
          });
        });

        await Promise.all(filesPromises);
        await Promise.all(LabelProjectPromises);

        dispatch({ type: "EDIT_PROJECT_FINISHED", payload: null });
      }
      navigate('/projects')
    } catch (error) {
      dispatch({ type: "ERROR", payload: `${error}` });
    }
  };

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center">
      <div className="forms-container flex justify-center">
        {state.step == 1 && (
          <form>
            <div className="input-group">
              <label>Title:</label>
              <input type="text" name="title" {...title} />
            </div>
            <div className="input-group">
              <label>Description:</label>
              <textarea name="description" {...description} />
            </div>
            <div className="input-group">
              <label>Short Description:</label>
              <input
                type="text"
                name="shortDescription"
                {...shortDescription}
              />
            </div>
            <div className="input-group">
              <label>Link:</label>
              <input type="text" name="link" {...link} />
            </div>

            <div className="input-group">
              <label>Repository:</label>
              <input type="text" name="repository" {...repository} />
            </div>
            <div className="input-group">
              <label>Published:</label>
              <input type="checkbox" name="published" {...publishedInput} />
            </div>

            <div className="input-group">
              <label>Slug:</label>
              <input type="text" name="slug" {...slug} />
            </div>
          </form>
        )}
        {state.step == 2 && (
          <form style={{ height: "60vh", overflowY: "scroll" }}>
            <div>
              <button type="button" onClick={handleAddLabel}>
                Agregar
              </button>
            </div>
            {labelsInputs.map((labelInput) => {
              return (
                <div key={labelInput.inputId}>
                  <div className="input-group">
                    <label htmlFor="">Label</label>
                    <select
                      value={labelInput.labelId ?? ""}
                      name=""
                      id={`labelId-${labelInput.inputId}`}
                      onInput={handleInputChange}
                    >
                      {labels.length == 0  && (<option disabled>Loading...</option>)}
                      {labels.map((label) => {
                        return (
                          <option key={label.id} value={label.id}>
                            {label.title}{" "}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="input-group">
                    <label htmlFor="">Order</label>
                    <select
                      value={labelInput.order ?? ""}
                      name=""
                      id={`order-${labelInput.inputId}`}
                      onInput={handleInputChange}
                    >
                      {!labelInput.order && <option>Choose the order</option>}
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => {
                        return (
                          <option key={number} value={number}>
                            {number}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <button
                    type="button"
                    onClick={(event) => handleRemoveLabel(labelInput.inputId)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </form>
        )}
        {state.step == 3 && (
          <form>
            <div className="input-group">
              <input
                type="file"
                name="files"
                id=""
                multiple
                onInput={handleFiles}
              />
              {loadingFiles && <p>Loading Images</p>}
              {errorFiles && <p>{errorFiles}</p>}
              <div className="images">
                {files?.map((file: any) => {

                  return (
                    <div key={file.url}>
                      <img key={file.public_id} src={file.url} alt="" />
                    </div>
                  )   
                })}
              </div>
            </div>
            {state.uploadingForm && <p>Loading</p>}
            {state.error && <p>{state.error}</p>}
          </form>
        )}
      </div>

      <div
        className="buttons absolute bottom-4 flex gap-5 justify-center w-full"
        style={{}}
      >
        {state.step == 1 ? (
          <Link className="btn--secondary " to="/projects">
            Back to projects
          </Link>
        ) : (
          <button
            className="btn--secondary"
            type="button"
            onClick={(event) => {
              dispatch({ type: "CHANGE_STEP", payload: state.step - 1 });
            }}
          >
            Previous
          </button>
        )}
        {state.step == 3 ? (
          <button
            className="btn--primary"
            onClick={handleSubmit}
            type="submit"
          >
            Submit
          </button>
        ) : (
          <button
            className="btn--primary"
            type="button"
            onClick={(event) => {
              dispatch({ type: "CHANGE_STEP", payload: state.step + 1 });
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

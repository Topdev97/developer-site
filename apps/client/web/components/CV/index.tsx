import React from "react";

export const CV = (props: any) => {
  const [openModal, setOpenModal] = React.useState(false);
  const uri = process.env.NEXT_PUBLIC_CV_URI;
  const uriEng = process.env.NEXT_PUBLIC_CV_URI_ENG;
  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <div className="m-0 p-0">
      <button
        onClick={handleClick}
        className={`text-lg text-center font-semibold bg-primary-400 hover:bg-primary-500 transition-all text-primary-100 px-4 py-2 w-full md:w-42 lg:m-0`}
      >
        Download CV
      </button>
      {openModal && (
        <div className="cv-modal">
          <div className="grid grid-cols-2 bg-white w-1/2 h-1/2 absolute justify-items-center">
            <a href={uri} className="row-start-2 flex flex-col items-center w-fit h-fit">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--twemoji"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill="#1F429B"
                  d="M13 5H4a4 4 0 0 0-4 4v9h13V5zm-4.663 9.292l-1.882-1.367l-1.882 1.367l.719-2.212l-1.882-1.368h2.326L6.455 8.5l.719 2.212H9.5L7.618 12.08l.719 2.212z"
                />
                <path fill="#EEE" d="M32 5H13v13h23V9a4 4 0 0 0-4-4z" />
                <path
                  fill="#D42D27"
                  d="M0 18v9a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-9H0z"
                />
                <path
                  fill="#FFF"
                  d="M7.174 10.712L6.455 8.5l-.719 2.212H3.41l1.882 1.368l-.719 2.212l1.882-1.367l1.882 1.367l-.719-2.212L9.5 10.712z"
                />
              </svg>

              <span className="dark:text-black">Spanish</span>
            </a>
            <a href={uriEng} className="row-start-2 flex flex-col items-center w-fit h-fit">
              <svg
                height="50px"
                width="50px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <path
                  style={{ fill: "#41479B" }}
                  d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621V385.38
	c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345V126.621
	C512,105.443,494.833,88.276,473.655,88.276z"
                />
                <path
                  style={{ fill: "#F5F5F5" }}
                  d="M511.469,120.282c-3.022-18.159-18.797-32.007-37.814-32.007h-9.977l-163.54,107.147V88.276h-88.276
	v107.147L48.322,88.276h-9.977c-19.017,0-34.792,13.847-37.814,32.007l139.778,91.58H0v88.276h140.309L0.531,391.717
	c3.022,18.159,18.797,32.007,37.814,32.007h9.977l163.54-107.147v107.147h88.276V316.577l163.54,107.147h9.977
	c19.017,0,34.792-13.847,37.814-32.007l-139.778-91.58H512v-88.276H371.691L511.469,120.282z"
                />
                <g>
                  <polygon
                    style={{ fill: "#FF4B55" }}
                    points="282.483,88.276 229.517,88.276 229.517,229.517 0,229.517 0,282.483 229.517,282.483 
		229.517,423.724 282.483,423.724 282.483,282.483 512,282.483 512,229.517 282.483,229.517 	"
                  />
                  <path
                    style={{ fill: "#FF4B55" }}
                    d="M24.793,421.252l186.583-121.114h-32.428L9.224,410.31
		C13.377,415.157,18.714,418.955,24.793,421.252z"
                  />
                  <path
                    style={{ fill: "#FF4B55" }}
                    d="M346.388,300.138H313.96l180.716,117.305c5.057-3.321,9.277-7.807,12.287-13.075L346.388,300.138z"
                  />
                  <path
                    style={{ fill: "#FF4B55" }}
                    d="M4.049,109.475l157.73,102.387h32.428L15.475,95.842C10.676,99.414,6.749,104.084,4.049,109.475z"
                  />
                  <path
                    style={{ fill: "#FF4B55" }}
                    d="M332.566,211.862l170.035-110.375c-4.199-4.831-9.578-8.607-15.699-10.86L300.138,211.862H332.566z"
                  />
                </g>
              </svg>

              <span className="dark:text-black">English</span>
            </a>
            <button
              className="cv_modal__close-button col-start-2 row-start-1 justify-self-end flex"
              onClick={() => setOpenModal(false)}
            >
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                  fill="#0F1729"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

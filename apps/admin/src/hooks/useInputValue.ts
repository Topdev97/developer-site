import React, { FormEventHandler } from "react"


export const useInputValue = (initValue: string | number | boolean | null) => {

    const [value, setValue] = React.useState<any>(initValue)

    const onInput:FormEventHandler<HTMLElement> = (event:any) => {
        setValue(event.target.value)
    }

    return {
        value,
        onInput
    }
}
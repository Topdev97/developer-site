import { TypographyColor, TypographySize, TypographyWeight, createTypography } from "../Typography"

export interface LinkProps {
    href:string,
    label:string,
    size?:TypographySize,
    weight?:TypographyWeight

}

export const createLink = ({href,label,size = TypographySize.bodyLarge,weight = TypographyWeight.REGULAR}:LinkProps) => {
    const anchor = document.createElement("a")
    anchor.href = href
    const text = createTypography({label,size,weight,color:TypographyColor.Primary})
    anchor.append(text)
    return anchor
}
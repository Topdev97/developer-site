import "./navbar-desktop.css"

export interface NavbarDesktopProps {
    logo:string
}



export const createNavbarDesktop = ({logo:logoUrl}:NavbarDesktopProps) => {
    const navbar = document.createElement("nav")
    navbar.className = ["navbar--desktop"].join(" ")
    const logo = document.createElement("img")
    logo.src = logoUrl
    navbar.append(logo)

    return navbar
 }
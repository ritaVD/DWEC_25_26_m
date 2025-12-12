import { usuariosConHabilidades } from "../db/data";

export default function createEjercicio6 () {
    const sinFetching = () => usuariosConHabilidades;

    const renderTarjetas = () =>{
        const container = document.createElement('div')
        container.classList.add('users-container')

        const card = document.createElement('card')
        card.classList.add('user-card')

        const userName = document.createElement('h2')
        userName.classList.add('user-name')

        const userInfo = document.createElement('h3')
        userInfo.classList.add('user-info')

        const skills = document.createElement('div')
        skills.classList.add('skills-container')

        const skill = document.createElement('label')
        skill.classList.add('skill-tag')

        const level = document.createElement('label')
        level.classList.add('level-badge')

        if(usuariosConHabilidades.nivel.toLowerCase()  === 'senior')

        skills.appendChild(skill)
        skills.appendChild(level)

        card.appendChild(userName)
        card.appendChild(userInfo)
        card.appendChild(skills)
    }

}
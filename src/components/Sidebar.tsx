import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://media.discordapp.net/attachments/700007152978493522/983433395260502026/c577782cf797b057a9975a9e3e871752.jpg?width=488&height=488"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/LucasLuisBorges.png"/>

        <strong>Lucas Borges</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

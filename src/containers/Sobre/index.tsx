import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
      consectetur, nam pariatur ex, repellendus est debitis inventore placeat
      nostrum tenetur rem assumenda fugit? Ipsum iure ea necessitatibus nobis,
      tempore quis.
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=Danpalmeira92&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
        alt=""
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Danpalmeira92&layout=compact&langs_count=7&theme=dracula"
        alt=""
      />
    </GithubSecao>
  </section>
)

export default Sobre

import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={16}>Daniel Palmeira</Titulo>
      <Paragrafo tipo="secundario" font-size={16}>
        Danpalmeira92
      </Paragrafo>
      <Descricao tipo="principal" fontSize={10}>
        Desenvolvedor Front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

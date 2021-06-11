
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import SafeEnviroment from 'ui/components/feedback/SafeEnviroment/SafeEnviroment'
import PageTitle from './../../src/ui/components/data-display/PageTitle/PageTitle';


export default function Home() {
  return (
    <div>
      <SafeEnviroment/>
      <PageTitle 
        title={'Conheça os Profissionais'}
        subtitle={'Preencha seu endereço e veja todos os Profissionais da sua localidade'}
        />


    <UserInformation 
      name={'Nikolas'}
      picture={'https://github.com/nikhenry2212.png'}
      rating={3}
      description={'São Paulo'}

      />
    {/* <UserInformation 
      name={'Priscila'}
      picture={'https://github.com/PriPrudente.png'}
      rating={3}
      description={'São Paulo'}

      /> */}
    </div>
  )
}

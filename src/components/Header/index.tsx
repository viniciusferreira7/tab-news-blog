import { Avatar } from './components/Avatar'

export default function Header() {
  return (
    <header
      className="lg:h-screen pt-8 pb-6 lg:py-0
      bg-gray-100 flex flex-col items-center justify-center"
    >
      <div className="w-full justify-center flex gap-3 items-center">
        <Avatar />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Vinicius Ferreira
          </h2>
          <h3 className="text-xs text-gray-500 italic">
            Front End Developer@GovOne
          </h3>
        </div>
      </div>
      <div className="w-full lg:w-80">
        <p className="text-sm italic text-gray-500 mt-6 lg:mt-12">
          Criando coisas incríveis desde 2021, com muita atenção aos detalhes,
          sentimento de dono e exercendo o feedback.
        </p>
        <p className="text-sm italic text-gray-500 mt-2">
          Você pode me chamar de Vini. 😁
        </p>
      </div>
    </header>
  )
}

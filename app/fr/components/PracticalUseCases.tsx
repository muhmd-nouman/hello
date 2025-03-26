import Image from "next/image"
import {
  Gamepad2,
  MessageSquare,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Slack,
  Smartphone,
  FileText,
  Code,
  PenTool,
} from "lucide-react"

export default function PracticalUseCases() {
  return (
    <section className="mx-auto py-12">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold dark:text-yellow-300 mb-8">
          Utilisations Pratiques des Caractères Invisibles
        </h2>

        {/* Section Gaming */}
        <div className="mb-12 bg-white dark:bg-white/5 border dark:border-white/10 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <Gamepad2 className="text-yellow-300 h-8 w-8 flex-shrink-0" />
            <h3 className="text-2xl font-semibold text-black dark:text-yellow-200">
              Pseudonymes & Profils de Gaming
            </h3>
          </div>

          <p className="mb-6">
            Les caractères invisibles sont devenus l’outil secret des gamers qui souhaitent créer des pseudonymes et des profils remarquables. Ces caractères spéciaux vous permettent d’ajouter des espacements uniques, de créer des noms mystérieux et de faire ressortir votre profil parmi des milliers d’autres. De nombreux joueurs compétitifs utilisent ces caractères pour que leur nom soit immédiatement reconnu dans les classements et pendant les parties.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-background dark:bg-white/5 p-4 rounded-lg">
              <h4 className="text-xl dark:text-yellow-100 font-semibold mb-3">
                Personnalisation de Pseudonyme sur Fortnite
              </h4>
              <p className="mb-4">
                L’immense base de joueurs de Fortnite rend indispensable de se démarquer. Les caractères invisibles vous permettent de créer des noms saisissants qui semblent flotter ou qui présentent des espacements inhabituels. Les joueurs professionnels et streamers utilisent souvent ces caractères pour créer une identité de marque facilement reconnaissable par leurs fans lors des tournois et des diffusions en direct.
              </p>
              <div className="mb-4">
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">
                  Comment utiliser les caractères invisibles sur Fortnite :
                </h5>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Générez des caractères invisibles avec notre outil</li>
                  <li>Copiez les caractères invisibles dans le presse-papiers</li>
                  <li>Ouvrez Fortnite et accédez aux paramètres de votre compte</li>
                  <li>Collez les caractères invisibles dans votre pseudonyme</li>
                  <li>Enregistrez vos modifications</li>
                </ol>
              </div>
              <div className="mb-4">
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">
                  Utilisations populaires sur Fortnite :
                </h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Créez un pseudonyme totalement invisible qui apparaît comme un espace vide</li>
                  <li>Ajoutez des espacements personnalisés entre les caractères pour un look unique</li>
                  <li>Faites en sorte que votre nom soit distinctif et facilement reconnaissable dans le killfeed</li>
                  <li>Créez des tags de clan qui se démarquent du texte standard</li>
                  <li>Obtenez des effets de texte "flottant" dans votre pseudonyme</li>
                </ul>
              </div>
            </div>

            <div className="dark:bg-white/5 p-4 rounded-lg">
              <h4 className="text-xl dark:text-yellow-100 font-semibold mb-3">
                Astuces de Noms sur PUBG Mobile & PC
              </h4>
              <p className="mb-4">
                Les joueurs de PUBG ont découvert que les caractères invisibles offrent un avantage tactique en rendant les pseudonymes plus difficiles à signaler ou à mémoriser. De nombreux joueurs d’élite utilisent ces caractères pour créer des noms minimalistes et élégants tout en conservant leur originalité. Cette technique est particulièrement populaire dans les parties compétitives.
              </p>
              <div className="mb-4">
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">
                  Comment utiliser les caractères invisibles sur PUBG :
                </h5>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Générez des caractères invisibles avec notre outil</li>
                  <li>Copiez les caractères invisibles dans le presse-papiers</li>
                  <li>Ouvrez PUBG et accédez à votre profil</li>
                  <li>Modifiez votre nom et collez-y les caractères invisibles</li>
                  <li>Confirmez les modifications</li>
                </ol>
              </div>
              <div className="mb-4">
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">
                  Utilisations populaires sur PUBG :
                </h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Créez des pseudonymes mystérieux qui semblent plus courts qu’ils ne le sont</li>
                  <li>Faites ressortir le nom de votre clan grâce à des espacements inhabituels</li>
                  <li>Ajoutez des espaces invisibles pour aligner le texte au centre ou à droite</li>
                  <li>Créez une apparence de profil minimaliste qui reste percutante</li>
                  <li>Faites en sorte que des caractères spéciaux semblent flotter dans votre pseudonyme</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="dark:bg-white/5 p-4 rounded-lg">
            <h4 className="text-xl dark:text-yellow-100 font-semibold mb-3">
              Autres Jeux Populaires
            </h4>
            <p className="mb-4">
              Les caractères invisibles se retrouvent dans presque toutes les communautés de jeux en ligne. Les joueurs les utilisent pour renforcer leur identité numérique et obtenir un avantage visuel dans la présentation de leur nom. Des MMORPG aux jeux de tir à la première personne, ces caractères spéciaux remplissent de nombreux rôles créatifs.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div> 
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">
                  Minecraft
                </h5>
                <p className="mb-4">
                  Les administrateurs de serveurs Minecraft utilisent les caractères invisibles pour créer des noms et des descriptions de serveur visuellement percutants. Les joueurs les emploient également sur des pancartes, dans des livres et dans le chat pour créer des effets de formatage uniques qui améliorent l’expérience roleplay et la narration. Les espacements personnalisés dans les noms de factions sont devenus un symbole de statut sur les serveurs compétitifs.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">
                  Call of Duty
                </h5>
                <p className="mb-4">
                  Les joueurs de CoD exploitent les caractères invisibles pour créer des pseudonymes intimidants qui se distinguent dans les lobbys et le killfeed. Les joueurs professionnels utilisent souvent ces caractères pour maintenir leur identité de marque lors des tournois et sur les plateformes de streaming. L’avantage tactique vient de noms distinctifs difficiles à signaler ou à mémoriser par les adversaires.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">
                  League of Legends
                </h5>
                <p className="mb-4">
                  Les joueurs de LoL ont élevé la personnalisation des noms au rang d’art en utilisant les caractères invisibles. Les joueurs de haut niveau les utilisent pour créer des noms d’invocateur minimalistes et professionnels qui reflètent leur compétence. Les tags de clan avec des espacements personnalisés aident les équipes à établir une identité cohérente immédiatement reconnaissable par les fans lors des tournois et des diffusions en direct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

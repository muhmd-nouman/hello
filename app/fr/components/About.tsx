import Link from "next/link"

export default function AboutInvisibleText() {
  return (
    <>
      <section className="mx-auto py-16" id="introduction-to-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">
            Introduction au{" "}
            <Link href="https://www.invisibletext.me" className="hover:underline">
              Texte Invisible
            </Link>
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">
            Les textes invisibles sont des caractères Unicode spéciaux qui n’affichent aucun symbole ni espace. Ils possèdent des valeurs Unicode uniques et occupent de l’espace dans le texte sans être visibles. Ces caractères sont utiles pour un formatage de texte discret dans diverses applications.
          </p>
        </div>
      </section>
      <section className="mx-auto py-16" id="what-is-invisible-text">
        <div className="container mx-auto">
          <h2 className="max-w-3xl mx-auto text-center text-2xl font-bold text-black dark:text-yellow-300 mb-4">
            Qu’est-ce que le Texte Invisible ?
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-200">
            Les caractères invisibles ne sont pas perceptibles à l’œil nu, mais ils remplissent des fonctions importantes. Ces caractères Unicode, souvent incluant des caractères à largeur nulle ou des méthodes de formatage, créent des espaces sans utiliser la barre d’espace.
          </p>
        </div>
      </section>
      <section className="mx-auto py-16" id="types-of-unicode-invisible-text">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold text-black dark:text-yellow-300 mb-6">
            Types de Caractères Unicode Invisibles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Espace à Largeur Zéro (U+200B)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                L’Espace à Largeur Zéro (ZWSP) est un caractère invisible qui n’occupe aucun espace visuel, mais qui est reconnu comme un caractère valide par les ordinateurs. Il fonctionne comme un espace, mais avec une largeur nulle, permettant de séparer le texte sans laisser de vides visibles. Le ZWSP est particulièrement utile pour créer des sauts de ligne sur des plateformes ne supportant pas un formatage traditionnel, pour ajouter des césures dans de longs textes sans espaces visibles ou pour créer des noms d’utilisateur et des messages apparaissant comme vides. Ce caractère est largement compatible et fonctionne dans la plupart des applications, sites web et plateformes.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Remplisseur Hangul (U+3164)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg"> ㅤ</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                Le Remplisseur Hangul est un caractère invisible spécial, initialement conçu pour le traitement du texte coréen (Hangul). Contrairement à l’espace à largeur zéro, le Remplisseur Hangul occupe une largeur visible, ce qui le rend idéal pour créer des espaces réellement vides. Ce caractère est excellent pour générer des messages vides, ajouter des espacements invisibles substantiels entre du texte visible, et créer des noms d’utilisateur qui apparaissent complètement vides. Le Remplisseur Hangul est très compatible entre les plateformes et fonctionne dans la plupart des applications et sites modernes.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Assembleur à Largeur Zéro (U+200D)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                L’Assembleur à Largeur Zéro (ZWJ) est un caractère invisible qui relie deux caractères adjacents de manière particulière. Bien qu’il soit principalement utilisé dans des langues telles que l’arabe et l’hindi pour contrôler la liaison des lettres, il est également employé dans des séquences d’emoji pour créer des emoji combinés (comme l’emoji famille). Pour le texte invisible, le ZWJ peut être utilisé pour créer des coupures invisibles dans le texte sans affecter la mise en page, créer des formats uniques pour les noms d’utilisateur, ou même contourner certains filtres de caractères. Le ZWJ est largement supporté sur les plateformes modernes.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 border-black/10 rounded-lg p-6">
              <h3 className="text-black dark:text-yellow-200 font-bold mb-6">
                Non-Agrégateur à Largeur Zéro (U+200C)
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-background dark:bg-blue-900 w-16 h-16 flex items-center justify-center rounded border">
                  <span className="bg-blue-300 p-0 text-black text-lg">⠀</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-200">
                Le Non-Agrégateur à Largeur Zéro (ZWNJ) est un caractère invisible qui empêche deux caractères adjacents de se lier lorsqu’ils devraient normalement le faire. Bien qu’il ait des usages spécifiques dans les langues dont l’écriture est connectée, comme le persan et l’arabe, le ZWNJ peut être utilisé de manière similaire à d’autres caractères à largeur nulle pour du texte invisible. Il est idéal pour créer des coupures invisibles dans le texte, formater les noms d’utilisateur de façon originale, ou ajouter des marqueurs invisibles dans le texte. Le ZWNJ est bien compatible et fonctionne de manière fiable sur la plupart des plateformes modernes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

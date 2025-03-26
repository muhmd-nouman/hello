import { Metadata } from "next"

type MetadataProps = {
  title: string
  description: string
  path: string
  alternateLanguages?: Record<string, string>
}

export function generateMetadata({
  title,
  description,
  path,
  alternateLanguages,
}: MetadataProps): Metadata {
  const url = `https://www.invisibletext.me/${path}`
  
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: alternateLanguages,
    },
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      title,
      description,
    },
  }
}

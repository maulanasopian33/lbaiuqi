export const usePageSeo = ({
  title,
  description,
  image
}: {
  title: string
  description: string
  image?: string
}) => {
  useSeoMeta({
    title,
    description,
    // Open Graph
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogImage: image,
    // Twitter Card
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image
  })
}
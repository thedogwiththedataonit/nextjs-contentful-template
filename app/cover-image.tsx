import ContentfulImage from "../lib/contentful-image";
import Link from "next/link";

export default function CoverImage({
  title,
  url,
  slug,
}: {
  title: string;
  url: string;
  slug?: string;
}) {
  const image = (
    <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
      <ContentfulImage
        alt={`Cover Image for ${title}`}
        priority
        width={2000}
        height={1125}
        className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
        src={url}
      />
    </div>
  );

  return (
    <>
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title} className="block">
          {image}
        </Link>
      ) : (
        image
      )}
    </>
  );
}

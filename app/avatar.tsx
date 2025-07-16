import ContentfulImage from "@/lib/contentful-image";

export default function Avatar({
  name,
  picture,
}: {
  name: string;
  picture: any;
}) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative w-10 h-10 overflow-hidden rounded-full ring-2 ring-border group-hover:ring-accent transition-all duration-300">
        <ContentfulImage
          alt={name}
          className="object-cover w-full h-full"
          height={40}
          width={40}
          src={picture.url}
        />
      </div>
      <div>
        <p className="font-medium text-sm">{name}</p>
        <p className="text-xs text-secondary">Author</p>
      </div>
    </div>
  );
}

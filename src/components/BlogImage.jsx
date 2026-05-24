import Image from "next/image";

export default function BlogImage({ src, alt, caption }) {
    return (
        <figure className="my-10">
            <div className="relative w-full rounded-xl overflow-hidden border border-white/10">
                <Image src={src} alt={alt || ''} fill className="object-contain" />
            </div>
            {caption && (
                <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}
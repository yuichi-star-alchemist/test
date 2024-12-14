import ToolChip from "@/features/common/ToolChip"
import Image from "next/image"
import Link from "next/link"

const ImageViewItem = ({
  itemId,
  imageUrl,
  itemName,
}: Readonly<{
  itemId: string
  imageUrl: string
  itemName: string
}>) => {
  return (
    <li>
      <Link href={`/items/${ itemId }`} className="tooltip">
        <Image
          src={ imageUrl }
          alt="グッズの画像です"
          width={300}
          height={300}
          className="hover:opacity-80"
        />
        <ToolChip>{ `${ itemName }の詳細を見る` }</ToolChip>
      </Link>
    </li>
  )
}

export default ImageViewItem
import './Tag.css'

interface TagProps {
  label: string
  variant: string
}

export default function Tag({ label, variant }: TagProps) {
  return <span className={`tag tag--${variant}`}>{label}</span>
}

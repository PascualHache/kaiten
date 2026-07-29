import {
  IconMountain,
  IconUsers,
  IconClock,
  IconSchool,
  IconFeather,
  IconTarget,
  IconShoppingCart,
  IconRocket,
  IconSearch,
  IconRepeat,
  IconCamera,
  IconClipboardList,
  IconCurrencyEuro,
  IconCoin,
  IconBulb,
  IconTrophy,
  IconToolsKitchen2,
  IconStar,
  IconCircleX,
  IconSnowflake,
  IconSparkles,
  IconSettings,
  IconInfoCircle,
} from '@tabler/icons-react'

const ICON_BY_EMOJI: Record<string, typeof IconInfoCircle> = {
  '🎿': IconMountain,
  '⛰️': IconMountain,
  '❄️': IconSnowflake,
  '👥': IconUsers,
  '⏱️': IconClock,
  '🎓': IconSchool,
  '🦅': IconFeather,
  '🎯': IconTarget,
  '🛒': IconShoppingCart,
  '🚀': IconRocket,
  '🔍': IconSearch,
  '🔁': IconRepeat,
  '📷': IconCamera,
  '📋': IconClipboardList,
  '💶': IconCurrencyEuro,
  '💰': IconCoin,
  '💡': IconBulb,
  '🏆': IconTrophy,
  '🍽️': IconToolsKitchen2,
  '⭐': IconStar,
  '✨': IconSparkles,
  '❌': IconCircleX,
  '⚙️': IconSettings,
}

interface Props {
  emoji: string
  className?: string
  size?: number
  stroke?: number
}

export default function InfoIcon({
  emoji,
  className,
  size = 22,
  stroke = 1.5,
}: Props) {
  const Icon = ICON_BY_EMOJI[emoji] ?? IconInfoCircle
  return <Icon className={className} size={size} stroke={stroke} />
}

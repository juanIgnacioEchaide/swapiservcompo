import { Title } from "@/utils/constants";
interface PageTitleProps {
    title: string
}
export default function PageTitle({ title }: PageTitleProps) {
    return <p>{title}</p>
}
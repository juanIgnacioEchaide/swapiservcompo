interface PageTitleProps {
    title: string
}
export default function PageTitle({ title }: PageTitleProps) {
    return <p>{title}</p>
}
import { LoadingOutlined } from "@ant-design/icons";

export default function LoadingComponent() {
    return <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'

        }}>
        <LoadingOutlined style={{
            fontSize: '30vh'
        }} />
    </div>
}
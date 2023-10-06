import LoadingComponent from "@/components/atoms/page/Loading";

export default function Loading() {
    return <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
                }}
            >
                <LoadingComponent />
            </div>
}
import { api } from "@/services/api"

export default async function People() {

    const data = await api.getPeople(5)

    return (<div>
                <p>people</p>
                <p>{JSON.stringify(data)}</p>
            </div>)
}
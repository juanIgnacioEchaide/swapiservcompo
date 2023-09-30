import { api } from "@/services/api"

export default async function People() {

    const { results, next } = await api.getPeople(2)

    return (<div>
                <p>people</p>
                <p>{JSON.stringify(results)}</p>
                <p>{next}</p>
            </div>)
}
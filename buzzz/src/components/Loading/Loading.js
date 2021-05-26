import { Bones } from 'react-bones/lib'
export default function Loading() {
    return (<>
        <div>
            <Bones />
            <div style={{ padding: 10 }} />
            <Bones width={600} height={20} />
            <div style={{ padding: 10 }} />
            <Bones width={600} height={20} />
            <div style={{ padding: 10 }} />
            <Bones width={600} height={20} />
            <div style={{ padding: 10 }} />
        </div>
    </>)
}

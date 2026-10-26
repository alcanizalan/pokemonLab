"use client";


export default function Gachapon() {

    async function handleSubmit(formData: FormData) {
        
    }

    return (
        <section>
            <h1>Gachapon</h1>
            <form action={handleSubmit}>
                <button type="submit">Play</button>
            </form>
        </section>
    )
}
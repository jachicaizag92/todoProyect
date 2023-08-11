
const TodoFilter = () => {
    return (
        <section className="container mx-auto  mt-8">
            <div className="bg-white px-4 p-4 rounded-md  flex gap-2 justify-center">
                <button className="text-blue-600">All</button>
                <button className="hover:text-blue-600">Active </button>
                <button className="hover:text-blue-600">Completed</button>
            </div>
        </section>
    )
}

export default TodoFilter
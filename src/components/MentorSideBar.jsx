import { useNavigate } from "react-router-dom"

export default function MentorSideBar() {
    const navigate = useNavigate();
    return(
        <section className="flex flex-col gap-4 p-4 ">
            {["Availability", "Requests", "Sessions"].map((item, index) => (
                <p key={index} className="text-gray-700 border-b border-gray-200 cursor-pointer hover:text-gray-900" onClick={() => navigate(`/${item.toLowerCase()}`)}>{item}</p>
            ))}
        </section>
    )
}
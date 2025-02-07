import Header from "@/components/Header"

export default function profileLayout({ children }) {
    return (
    <div>
        <Header />
        {children}
    </div>
    )
  }
import Header from "@/components/Header"

export default function AuthLayout({ children }) {
    return (
    <div>
        <Header />
        {children}
    </div>
    )
  }
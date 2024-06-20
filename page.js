import Dashboard from "./dashboard/DashBoard";
import Homes from "./home/page"

//Pharmacy Module

export default function Home({ children }) {
  return (
    <div>
      <Dashboard>
        {
          
          <Homes />

        }
      </Dashboard>
    </div>
  )
}


import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

function Home() {
  const user = { firstName: "John", lastName: "Doe", email: "test@mail.com" };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            subtext='Access and manage your account and transactions.'
            user={user?.firstName || "Guest"}
          />
          <TotalBalanceBox totalBanks={3} totalCurrentBalance={1000} accounts={[]} />
        </header>
      </div>

      <RightSidebar banks={[{ currentBalance: 20.5 }, { currentBalance: 1200.05 }]} transactions={[]} user={user} />
    </section>
  );
}

export default Home;

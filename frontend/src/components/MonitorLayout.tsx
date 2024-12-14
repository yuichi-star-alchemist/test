import MonitorDecorationsImage from "./MonitorDecorationsImage"
import PowerButtonImage from "./PowerButtonImage"

// 受け取ったchildrenをレスポンシブに配置するレイアウトです
const MonitorLayout = ({
  headerContent,
  viewContent,
  naviContent,
  footerContent
}: Readonly<{
  headerContent: React.ReactNode
  viewContent: React.ReactNode
  naviContent: React.ReactNode
  footerContent: React.ReactNode
}>) => {
  //gridによって要素を配置 4つをまとめるコンテナ
  const containerBaseClass = "grid relative w-full h-full rounded-[50px] bg-my-light-blue grid-rows-[40px_5fr_20px_4fr_40px] grid-cols-[20px_30px_1fr_30px_20px]"
  const container_X_mob = "X-mob:grid-rows-[40px_1fr_40px] X-mob:grid-cols-[50px_5fr_20px_4fr_50px]"
  const container_X_tab = "X-tab:h-[calc(100%-50px)] X-tab:grid-rows-[40px_1fr_40px] X-tab:grid-cols-[20px_5fr_54fr_20px_26fr_6fr_20px]"
  // viewContent
  const viewContentBaseClass = "bg-my-gray rounded-[32px] overflow-auto relative row-start-2 row-end-3 col-start-2 col-end-5"
  // naviContent
  const naviContentBaseClass = "bg-my-gray rounded-[32px] overflow-auto row-start-4 row-end-5 col-start-2 col-end-5"
  const navi_X_mob = "X-mob:row-start-2 X-mob:row-end-3 X-mob:col-start-4 X-mob:col-end-5"
  const navi_X_tab = "X-tab:row-start-2 X-tab:row-end-3 X-tab:col-start-5 X-tab:col-end-7"

  return (
    <>
      <section
        className={`${ containerBaseClass } ${ container_X_mob } ${ container_X_tab }`}
      >
        <section
          className="flex items-center justify-end col-start-3 col-end-4 X-tab:col-end-6 X-mob:col-start-4 X-mob:col-end-5"
        >
          { headerContent }
        </section>
        <section
          className={`${ viewContentBaseClass } X-tab:col-end-4 X-mob:col-end-3`}
        >
          { viewContent }
        </section>
        <section
          className={`${ naviContentBaseClass } ${ navi_X_mob } ${ navi_X_tab } `}
        >
          { naviContent }
        </section>
        <section
          className="flex justify-end row-start-5 col-start-3 col-end-4 X-tab:row-start-3 X-tab:col-end-6 X-mob:row-start-1 X-mob:row-end-2 X-mob:col-start-2 X-mob:col-end-3"
        >
          { footerContent }
        </section>
        <PowerButtonImage/>
      </section>
      <div className="relative w-full h-[50px] hidden X-tab:block">
        <MonitorDecorationsImage/>
      </div>
    </>
  )
}

export default MonitorLayout
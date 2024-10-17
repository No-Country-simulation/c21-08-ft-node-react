type CustomerStepProps = {
  icon: React.ReactNode
  title: string
  desc: string
}

const CustomerStep = ({ icon, title, desc }: CustomerStepProps) => {
  return (
    <div className="flex gap-5 sm:gap-1">
      <div>{icon}</div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold leading-none xs:text-lg xs:leading-5">
          {title}
        </h3>
        <p className="xs:text-sm">{desc}</p>
      </div>
    </div>
  )
}

export default CustomerStep

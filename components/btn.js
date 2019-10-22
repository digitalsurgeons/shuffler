import Link from 'next/link'

const Btn = props => (
  <>
    <Link href={props.href}>
      <button className="btn">{ props.label }</button>
    </Link>
    
    <style jsx>{`
      .btn {
        background: #ddd;
        border-radius: 4px;
        color: #000;
        font-family: Menlo;
        margin-top: 10px;
        outline: none;
        padding: 10px 20px;
      }
    `}</style>
  </>
)

export default Btn

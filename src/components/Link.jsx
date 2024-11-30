const Link = ({link, text}) => {
    return (
      <div>
        <p><a href={link} title={text} target='_blank' rel='noreferrer noopener'>{text}</a></p>
      </div>
    )
}

export default Link
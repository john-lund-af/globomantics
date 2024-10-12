const Banner = () => {

  const logoStyles = {
    height: '150px',
    cursor: 'pointer'
  };

  const subtitleStyles = {
    fontStyle: 'italic',
    fontSize: 'x-large',
    color: 'coral'
  }

  return (
    <header className="row">
      <div className="col-5"><img style={logoStyles} src="./GloboLogo.svg" alt="globoLogo" /></div>
      <div className='col-7' style={subtitleStyles}>Providing houses all over the world</div>
    </header>
  )
}

export default Banner;
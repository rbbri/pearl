import React from 'react'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer is-fixed has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-2 social" style={{margin: 'auto'}}>
                <a title="facebook" href="https://www.facebook.com/pearlhackwick/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>

                <a title="instagram" href="https://www.instagram.com/pearlhackwick/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>

              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

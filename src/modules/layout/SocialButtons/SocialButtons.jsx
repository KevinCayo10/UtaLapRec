import WhatsAppIcon from '../../ui/Icons/WhatsAppIcon'
import InstagramIcon from '../../ui/Icons/InstagramIcon'
import { SOCIAL_ACCOUNTS } from '../../../utils/globalConstants'

function SocialButtons () {
  return (
    <div className='flex self-center gap-2'>
      {
      SOCIAL_ACCOUNTS.map((account) => {
        return (
          <a
            key={account.name}
            href={account.url}
            alt={account.name}
            title={account.name}
            target='_blank'
            rel='noreferrer'
            className='flex items-center justify-center w-10 h-10 text-white rounded-full cursor-pointer bg-brand'
          >
            {account.name === 'Instagram' && <InstagramIcon />}
            {account.name === 'WhatsApp' && <WhatsAppIcon />}
          </a>
        )
      })
    }
    </div>
  )
}

export default SocialButtons

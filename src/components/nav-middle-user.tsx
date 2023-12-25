"use client"
import { UseAuth } from '@/hooks/use-auth';
import AccountIcon from '../../public/assets/account';
import { User } from '@/payload-types'

export const UserNavMiddle = ({ user }: { user: User }) => {
  const { signOut } = UseAuth()

  return (
    <div className="dropdown dropdown-end">
      <div className="flex items-center">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar h-auto w-auto min-h-0 middle-nav-icon">
          <AccountIcon/>
        </label>
      </div>
        <ul tabIndex={0} className="dropdown-content text-body_xs_400 menu lang-dropdown hadow-navDropdown rounded">
          <li><a >Something</a></li>
          <li><a >Settings</a></li>
          <li><a onClick={signOut}>Log Out</a></li>
        </ul>
    </div>
  )
}
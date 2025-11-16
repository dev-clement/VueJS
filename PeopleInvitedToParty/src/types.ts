enum GENDER {
  MALE,
  FEMALE
}

interface Invitee {
  id: number
  , name: string
  , gender: GENDER
}

interface InviteeProps {
    invitee: Invitee
}

export { GENDER, type Invitee, type InviteeProps }
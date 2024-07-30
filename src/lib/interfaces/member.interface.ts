declare enum MemberStatus {
	PAIRED = 'PAIRED',
	UNPAIR = 'UNPAIR',
	FREEZE = 'FREEZE',
	FORM = 'FORM'
}

declare enum MemberRole {
	FRESHY = 'FRESHY',
	SOPHOMORE = 'SOPHOMORE',
	SENIOR = 'SENIOR'
}

declare interface Code {
	id: number;
	code: string;
	is_used: boolean;
	disabled: boolean;
	redeemed_by_id?: number | null;
	redeemed_by?: Member | null;
	creator_id: number;
	creator: Member;
	member_id?: number | null;
	member?: Member | null;
}

interface Member {
	id: number;
	nickname: string;
	username: string;
	student_id: string;
	avatarURL: string;
	unique_key: string;
	email: string;
	role: MemberRole;
	status: MemberStatus;
	elemental: string;
	reputation: number;
	token: number;
	this_or_that: string[];
	maximum_member: number;
	unlocked_puzzle: string[];
	puzzle_url: string;
	paired_member_id: number;
	paired_member: Member;
	paired_with: Member[];
	redeemed_codes: Code[];
	created_codes: Code[];
	hint?: string[];
	ranking: number;
}

declare enum MemberStatus {
	PAIRED = 'PAIRED',
	UNPAIR = 'UNPAIR',
	FREEZE = 'FREEZE'
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

declare interface Member {
	id: number;
	nickname: string;
	username: string;
	email: string;
	role: MemberRole;
	status: MemberStatus;
	elemental: string;
	reputation: number;
	coins: number;
	this_or_that: string[];
	maximum_member: number;
	unlocked_puzzle: string[];
	created_codes: Code[];
	redeemed_codes: Code[];
	paired_member_id?: number | null;
	paired_member?: Member | null;
	paired_with: Member[];
	code: Code[];
}

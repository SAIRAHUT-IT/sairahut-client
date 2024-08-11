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

declare interface Bingo {
	id: number;
	question: string;
	is_checked: boolean;
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

declare interface Ticket {
	id: number;
	title: string;
	is_used: boolean;
}

declare interface Member {
	id: number;
	real_nickname: string;
	contact: string;
	branch: string;
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
	puzzle_count: number;
	unlocked_puzzle: [number, number][];
	puzzle_url: string;
	paired_member_id: number;
	bingo_board: Bingo[];
	paired_member: Member;
	ticket: Ticket[];
	paired_with: Member[];
	redeemed_codes: Code[];
	created_codes: Code[];
	hint?: string[];
	ranking: number;
}

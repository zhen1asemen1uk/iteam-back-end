import { ObjectId } from 'mongoose';

interface ProjectInterface {
	name: string;
	iconUrl?: string;
	mainDevID?: string;
	subDevsID?: ObjectId[];
	history?: [];
	technologies?: ObjectId[];
	startTime: Date;
	endTime?: Date;
	status: string;
}

export default ProjectInterface;

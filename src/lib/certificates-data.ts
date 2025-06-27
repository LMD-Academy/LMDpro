
export enum CertificateType {
    COURSE = "Course",
    MAJOR = "Major Specialization",
    FIELD = "Field of Study",
}

export interface CertificateData {
    id: string;
    slug: string;
    title: string;
    type: CertificateType;
    date: string; // ISO 8601 date string
    user: string;
}

export const certificatesData: CertificateData[] = [
    {
        id: 'cert-001',
        slug: 'fundamentals-of-professional-communication-completion',
        title: 'Fundamentals of Professional Communication',
        type: CertificateType.COURSE,
        date: '2024-05-15T00:00:00Z',
        user: 'Alex Johnson',
    },
    {
        id: 'cert-002',
        slug: 'agile-business-specialization-completion',
        title: 'Agile Business Specialization',
        type: CertificateType.MAJOR,
        date: '2024-06-20T00:00:00Z',
        user: 'Alex Johnson',
    },
    {
        id: 'cert-003',
        slug: 'executive-leadership-completion',
        title: 'Executive Leadership',
        type: CertificateType.COURSE,
        date: '2024-07-01T00:00:00Z',
        user: 'Alex Johnson',
    },
    {
        id: 'cert-004',
        slug: 'general-core-studies-l1-completion',
        title: 'General Core Studies Level 1',
        type: CertificateType.FIELD,
        date: '2024-07-10T00:00:00Z',
        user: 'Alex Johnson',
    },
];

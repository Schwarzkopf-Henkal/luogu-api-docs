interface DataResponse<T> {
  code: number;
  currentTemplate: string;
  currentData: T;
  currentTitle: string;
  currentTheme: Theme | null;
  currentUser?: UserDetails;
}

interface StatusResponse {
  status: number;
}

interface APIResponse<T> extends StatusResponse {
  data: T;
}

interface IDResponse {
  id: string;
}

interface HTMLResponse {
  code: number;
  message: string;
  more: {
    html: string;
  };
}

interface GetScoreboardAPIResponse {
  scoreboard: List<Score>;
  userScore: Score;
}

interface GetUserAPIResponse {
  users: [User | null];
}

interface MessagesAPIResponse {
  messages: List<Message>;
}

interface GetImageAPIResponse {
  image: Image;
}

interface GenerateUploadParametersAPIResponse {
  uploadLink: {
    host: string;
    policy: string;
    accessKeyID: string;
    callback: string;
    signature: string;
    expiredTime: number;
    dir: string;
  };
}

interface LoginAPIResponse {
  username: string;
  locked: boolean;
  redirectTo: string;
}

interface UnlockAPIResponse {
  redirectTo: string;
}

interface ProblemListData {
  page: number;
  problems: List<Problem & {
    tags: number[];
    wantsTranslation: boolean;
    difficulty: number;
    totalSubmit: string;
    totalAccepted: string;
  }>;
}

interface ProblemData {
  problem: ProblemDetails;
  discussions: Array<{
    title: string;
    id: number;
  }>;
  bookmarked: boolean;
  vjudgeUsername: string | null;
  recommendations: Problem[];
  lastLanguage: string;
  lastCode: string;
}

interface ContestListData {
  contests: List<Contest>;
}

interface ContestData {
  contest: ContestDetails;
  contestProblems: Array<{
    score: number;
    problem: ProblemInfo;
    submitted: boolean;
  }>;
  accessLevel: number;
  joined: boolean;
}

interface RecordListData {
  records: List<RecordBase>;
}

interface RecordData {
  record: RecordDetails;
  testCaseGroup: number[][];
  showStatus: boolean;
}

interface ChatListData {
  latestMessages: List<Message>;
  unreadMessageCount: [] | {
    [user: string]: number
  };
}

interface ThemeListData {
  themes: List<ThemeDetails>;
}

interface ThemeData {
  theme: ThemeDetails;
}

interface ImageListData {
  images: List<Image>;
  spaceLimit: number;
  spaceUsage: number;
}

interface PasteListData {
  pastes: List<Paste>;
}

interface PasteData {
  paste: Paste;
}

interface RankingListData {
  rankList: List<RatingDetails>;
}

interface UnlockModeData {
  mode: string;
}

interface SubmitCodeData {
  rid: number;
}

interface ActivityData {
  uid: number;
  time: {
    date: string;
    timezone_type: number;
    timezone: string;
  };
  type: number;
  comment: string;
}

interface UIDData {
  uid: number;
}

interface ProblemInfo {
  pid: string;
  title: string;
  type: string;
}

interface Problem extends ProblemInfo {
  accepted: boolean;
  submitted: boolean;
}

interface ProblemDetails extends Problem {
  background: string;
  description: string;
  inputFormat: string;
  outputFormat: string;
  samples: Array<[string, string]>;
  hint: string;
  provider: User;
  canEdit: boolean;
  limits: {
    time: number[];
    memory: number[];
  };
  showScore: boolean;
  score: number;
  tags: number[];
  wantsTranslation: boolean;
  difficulty: number;
  totalSubmit: number;
  totalAccepted: number;
}

interface ContestInfo {
  id: number;
  name: string;
  startTime: number;
  endTime: number;
}

interface Contest extends ContestInfo {
  ruleType: number;
  visibilityType: number;
  rated: boolean;
  host: User | Team;
  problemCount: number;
}

interface ContestDetails extends Contest {
  description: string;
}

interface Score {
  details: {
    [pid: string]: {
      score: number;
      runningTime?: number;
    };
  };
  user: User;
  score: number;
  runningTime: number;
}

interface RecordBase {
  time: number | null;
  memory: number | null;
  problem: ProblemInfo;
  contest: ContestInfo | null;
  sourceCodeLength: number;
  submitTime: number;
  language: number;
  user?: User;
  id: number;
  status: number;
  score: number;
}

interface RecordDetails extends RecordBase {
  detail: {
    message: null;
    subtasks?: Array<{
      id: number;
      time: number;
      memory: number;
      score: number;
      status: number;
      testcases: number[];
    }>;
    testcases?: {
      [id: string]: {
        id: number;
        time: number;
        memory: number;
        score: number;
        status: number;
        message: string;
      };
    };
    compile?: {
      content: string;
      success: boolean;
    };
  };
  sourceCode: string;
}

interface User {
  uid: number;
  name: string;
  badge: string | null;
  isAdmin: boolean;
  color: string;
  ccfLevel: number;
}

interface UserDetails extends User {
  passed: string;
  rating: Rating;
  introduce: string;
  blogAddress: string;
  background: string;
  unreadMessageCount: number;
  unreadNoticeCount: number;
  verified: boolean;
}

interface Team {
  id: number;
  name: string;
}

interface Message {
  id: number;
  sender: User;
  receiver: User;
  time: number;
  status: number;
  content: string;
}

interface Theme {
  id: number;
  header: ThemeHeaderFooter;
  sideNav: ThemeSideNav;
  footer: ThemeHeaderFooter;
}

interface ThemeDetails extends Theme {
  name: string;
  type: number;
  author: User;
  updateTime: number;
  userCount: number;
}

interface ThemeHeaderFooter {
  imagePath: string | null;
  color: Array<[number, number, number, number]>;
  blur: number;
  brightness: number;
  degree: number;
  repeat: number;
  position: [number, number];
  size: [number, number];
  type: number;
}

interface ThemeSideNav {
  logoBackgroundColor: [number, number, number, number];
  color: [number, number, number, number];
  invertColor: boolean;
}

interface Image {
  thumbnailUrl: string;
  url: string;
  id: string;
  provider: User;
  uploadTime: number;
  size: number;
}

interface Paste {
  data: string;
  id: string;
  user: User;
  time: number;
  public: boolean;
}

interface Rating {
  user: User;
  rating: number;
}

interface RatingDetails extends Rating {
  contestRating: number;
  socialRating: number;
  practiceRating: number;
  basicRating: number;
  prizeRating: number;
  calculateTime: number;
}

interface Article {
  Type: string;
  PostTime: number;
  Author: User;
  Status: number;
  ContentDescription: string;
  ThumbUp: number;
  BlogID: number;
  Identifier: string;
  Title: string;
}

interface ArticleComment {
  Author: {
    UID: number;
    Username: string;
    isAdmin: boolean;
    isValid: boolean;
    isVerified: boolean;
    DynamicRate: number;
  };
  ReplyTime: number;
  Content: string;
}

interface List<T> {
  result: T[];
  count: number;
}

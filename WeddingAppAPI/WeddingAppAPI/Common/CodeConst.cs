namespace WeddingAppAPI.Common
{
    public class CodeConst
    {
        public static readonly Dictionary<int, string> FriendTypes = new Dictionary<int, string>
        {
            { 0, "Khác" },
            { 1, "Bạn bố Phương" },
            { 2, "Bạn mẹ Giang" },
            { 3, "Bạn bố Long" },
            { 4, "Bạn mẹ Vân" },
            { 5, "Bạn Duy" },
            { 6, "Bạn Diệp" },
            { 7, "Bạn Thảo" },
        };
        public static readonly Dictionary<bool, string> AcceptStatus = new Dictionary<bool, string>
        {
            { false, "sẽ KHÔNG tham dự" },
            { true, "đã XÁC NHẬN tham dự" },
        };
        public const string BAN_BO_PHUONG = "bbp";
        public const string BAN_ME_GIANG = "bmg";
        public const string BAN_BO_LONG = "bbl";
        public const string BAN_ME_VAN = "bmv";
    }
}

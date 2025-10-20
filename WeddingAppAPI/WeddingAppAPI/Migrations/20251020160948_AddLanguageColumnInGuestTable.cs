using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WeddingAppAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddLanguageColumnInGuestTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Language",
                table: "Guest",
                type: "nvarchar(40)",
                maxLength: 40,
                nullable: true,
                defaultValueSql: "'vi'");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Language",
                table: "Guest");
        }
    }
}

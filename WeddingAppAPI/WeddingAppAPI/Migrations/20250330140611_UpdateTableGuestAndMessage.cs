using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WeddingAppAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdateTableGuestAndMessage : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "GuestName",
                table: "Message",
                type: "nvarchar(40)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "Status",
                table: "Guest",
                type: "bit",
                nullable: false,
                defaultValueSql: "0");

            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "Guest",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GuestName",
                table: "Message");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Guest");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "Guest");
        }
    }
}

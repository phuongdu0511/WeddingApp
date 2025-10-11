using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WeddingAppAPI.Migrations
{
    /// <inheritdoc />
    public partial class addIndexIsUniqueForGuestPathColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Guest_GuestPath",
                table: "Guest",
                column: "GuestPath",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Guest_GuestPath",
                table: "Guest");
        }
    }
}

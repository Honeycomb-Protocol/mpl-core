use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::pubkey::Pubkey;

use crate::{
    instruction::accounts::{
        BurnAccounts, CompressAccounts, CreateAccounts, DecompressAccounts, TransferAccounts,
        UpdateAccounts,
    },
    processor::{BurnArgs, CompressArgs, CreateArgs, DecompressArgs, TransferArgs, UpdateArgs},
    state::Authority,
};

use super::{PluginValidation, ValidationResult};

/// The creator on an asset and whether or not they are verified.
#[derive(Clone, BorshSerialize, BorshDeserialize, Debug, PartialEq, Eq)]
pub struct Creator {
    address: Pubkey,
    percentage: u8,
}

/// The rule set for an asset indicating where it is allowed to be transferred.
#[derive(Clone, BorshSerialize, BorshDeserialize, Debug, PartialEq, Eq)]
pub enum RuleSet {
    /// No rules are enforced.
    None,
    /// Allow list of programs that are allowed to transfer, receive, or send the asset.
    ProgramAllowList(Vec<Pubkey>),
    /// Deny list of programs that are not allowed to transfer, receive, or send the asset.
    ProgramDenyList(Vec<Pubkey>),
}

/// Traditional royalties structure for an asset.
#[derive(Clone, BorshSerialize, BorshDeserialize, Debug, Eq, PartialEq)]
pub struct Royalties {
    /// The percentage of royalties to be paid to the creators.
    percentage: u8,
    /// A list of creators to receive royalties.
    creators: Vec<Creator>,
    /// The rule set for the asset to enforce royalties.
    rule_set: RuleSet,
}

impl PluginValidation for Royalties {
    fn validate_create(
        &self,
        _ctx: &CreateAccounts,
        _args: &CreateArgs,
        _authorities: &[Authority],
    ) -> Result<super::ValidationResult, solana_program::program_error::ProgramError> {
        Ok(ValidationResult::Pass)
    }

    fn validate_update(
        &self,
        _ctx: &UpdateAccounts,
        _args: &UpdateArgs,
        _authorities: &[Authority],
    ) -> Result<super::ValidationResult, solana_program::program_error::ProgramError> {
        Ok(ValidationResult::Pass)
    }

    fn validate_burn(
        &self,
        _ctx: &BurnAccounts,
        _args: &BurnArgs,
        _authorities: &[Authority],
    ) -> Result<super::ValidationResult, solana_program::program_error::ProgramError> {
        Ok(ValidationResult::Pass)
    }

    fn validate_transfer(
        &self,
        ctx: &TransferAccounts,
        _args: &TransferArgs,
        _authorities: &[Authority],
    ) -> Result<super::ValidationResult, solana_program::program_error::ProgramError> {
        match &self.rule_set {
            RuleSet::None => Ok(ValidationResult::Pass),
            RuleSet::ProgramAllowList(allow_list) => {
                if allow_list.contains(ctx.authority.owner)
                    || allow_list.contains(ctx.new_owner.owner)
                {
                    Ok(ValidationResult::Pass)
                } else {
                    Ok(ValidationResult::Rejected)
                }
            }
            RuleSet::ProgramDenyList(deny_list) => {
                if deny_list.contains(ctx.authority.owner)
                    || deny_list.contains(ctx.new_owner.owner)
                {
                    Ok(ValidationResult::Rejected)
                } else {
                    Ok(ValidationResult::Pass)
                }
            }
        }
    }

    fn validate_compress(
        &self,
        _ctx: &CompressAccounts,
        _args: &CompressArgs,
        _authorities: &[Authority],
    ) -> Result<super::ValidationResult, solana_program::program_error::ProgramError> {
        Ok(ValidationResult::Pass)
    }

    fn validate_decompress(
        &self,
        _ctx: &DecompressAccounts,
        _args: &DecompressArgs,
        _authorities: &[Authority],
    ) -> Result<super::ValidationResult, solana_program::program_error::ProgramError> {
        Ok(ValidationResult::Pass)
    }
}
